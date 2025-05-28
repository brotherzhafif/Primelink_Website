import { useState, useRef } from "react";

const API_URL = "https://primelink-api.vercel.app/api/chatbot";

export default function ChatbotWidget() {
    const [open, setOpen] = useState(false);
    const [messages, setMessages] = useState([
        { from: "bot", text: "Halo! Ada yang bisa dibantu? Silakan ketik pertanyaan Anda." }
    ]);
    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);
    const chatEndRef = useRef(null);

    const sendMessage = async () => {
        if (!input.trim()) return;
        const userMsg = { from: "user", text: input };
        setMessages((msgs) => [...msgs, userMsg]);
        setInput("");
        setLoading(true);

        try {
            const res = await fetch(API_URL, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ message: input, sessionId: "web-widget" }),
            });
            const data = await res.json();
            setMessages((msgs) => [
                ...msgs,
                { from: "bot", text: data.response || "Maaf, ada kendala pada bot." }
            ]);
        } catch {
            setMessages((msgs) => [
                ...msgs,
                { from: "bot", text: "Maaf, tidak dapat terhubung ke server chatbot." }
            ]);
        }
        setLoading(false);
        setTimeout(() => {
            chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
        }, 100);
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    };

    return (
        <>
            {/* Floating Button */}
            <button
                onClick={() => setOpen((v) => !v)}
                style={{
                    position: "fixed",
                    bottom: "20px",
                    right: "20px",
                    zIndex: 1001,
                    background: "#1D6EE5",
                    color: "white",
                    borderRadius: "30px",
                    minWidth: 56,
                    height: 56,
                    boxShadow: "0 4px 16px rgba(0,0,0,0.18)",
                    border: "none",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 28,
                    cursor: "pointer",
                    padding: "0 20px 0 16px",
                    gap: 10,
                }}
                aria-label="Chatbot"
            >
                {/* Icon robot */}
                <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
                    <rect x="4" y="8" width="16" height="10" rx="4" fill="#fff" stroke="#1D6EE5" strokeWidth="2" />
                    <rect x="9" y="2" width="6" height="6" rx="3" fill="#fff" stroke="#1D6EE5" strokeWidth="2" />
                    <circle cx="8.5" cy="13" r="1.5" fill="#1D6EE5" />
                    <circle cx="15.5" cy="13" r="1.5" fill="#1D6EE5" />
                    <rect x="11" y="16" width="2" height="2" rx="1" fill="#1D6EE5" />
                </svg>
                <span
                    style={{
                        fontSize: 15,
                        fontWeight: 600,
                        color: "#fff",
                        whiteSpace: "nowrap",
                        marginLeft: 6,
                        letterSpacing: 0.2,
                        display: "inline",
                    }}
                >
                    Chat Servo Bot
                </span>
            </button>
            {/* Chatbot Popup */}
            {open && (
                <div
                    style={{
                        position: "fixed",
                        bottom: 90,
                        right: 20,
                        width: 370,
                        maxWidth: "95vw",
                        background: "#f7f7f9",
                        borderRadius: 20,
                        boxShadow: "0 8px 32px rgba(0,0,0,0.18)",
                        zIndex: 1002,
                        display: "flex",
                        flexDirection: "column",
                        overflow: "hidden",
                        border: "1px solid #e5e7eb",
                    }}
                >
                    {/* Header */}
                    <div style={{
                        background: "#1D6EE5",
                        color: "#fff",
                        padding: "14px 20px",
                        fontWeight: 600,
                        fontSize: 16,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        borderTopLeftRadius: 20,
                        borderTopRightRadius: 20,
                    }}>
                        Servobot Primelink
                        <button
                            onClick={() => setOpen(false)}
                            style={{
                                background: "transparent",
                                border: "none",
                                color: "#fff",
                                fontSize: 20,
                                cursor: "pointer",
                                marginLeft: 8,
                            }}
                            aria-label="Tutup"
                        >
                            ×
                        </button>
                    </div>
                    {/* Chat area */}
                    <div
                        style={{
                            padding: 16,
                            background: "#ece5dd",
                            flex: 1,
                            overflowY: "auto",
                            maxHeight: 400,
                            minHeight: 220,
                            fontSize: 15,
                            display: "flex",
                            flexDirection: "column",
                        }}
                    >
                        {messages.map((msg, idx) => (
                            <div
                                key={idx}
                                style={{
                                    marginBottom: 10,
                                    display: "flex",
                                    justifyContent: msg.from === "user" ? "flex-end" : "flex-start",
                                }}
                            >
                                <span
                                    style={{
                                        display: "inline-block",
                                        background: msg.from === "user" ? "#dcf8c6" : "#fff",
                                        color: "#222",
                                        borderRadius: msg.from === "user" ? "16px 16px 4px 16px" : "16px 16px 16px 4px",
                                        padding: "10px 16px",
                                        maxWidth: 240,
                                        wordBreak: "break-word",
                                        boxShadow: "0 1px 2px rgba(0,0,0,0.04)",
                                        fontSize: 15,
                                    }}
                                >
                                    {msg.text}
                                </span>
                            </div>
                        ))}
                        <div ref={chatEndRef} />
                    </div>
                    {/* Input area */}
                    <div style={{
                        padding: 12,
                        borderTop: "1px solid #e5e7eb",
                        background: "#f7f7f9",
                        display: "flex",
                        gap: 8,
                        alignItems: "center",
                    }}>
                        <textarea
                            rows={1}
                            value={input}
                            onChange={e => setInput(e.target.value)}
                            onKeyDown={handleKeyDown}
                            placeholder="Tulis pesan..."
                            style={{
                                width: "100%",
                                resize: "none",
                                border: "1px solid #e5e7eb",
                                borderRadius: 16,
                                padding: "10px 12px",
                                fontSize: 15,
                                outline: "none",
                                marginBottom: 0,
                                background: "#fff",
                            }}
                            disabled={loading}
                        />
                        <button
                            onClick={sendMessage}
                            disabled={loading || !input.trim()}
                            style={{
                                background: "#1D6EE5",
                                color: "#fff",
                                border: "none",
                                borderRadius: 16,
                                padding: "10px 18px",
                                fontWeight: 600,
                                fontSize: 15,
                                cursor: loading ? "not-allowed" : "pointer",
                                opacity: loading ? 0.7 : 1,
                                transition: "opacity 0.2s"
                            }}
                        >
                            {loading ? "Mengirim..." : "Kirim"}
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}
