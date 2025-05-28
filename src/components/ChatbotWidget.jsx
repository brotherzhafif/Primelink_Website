import { useState, useRef, useEffect } from "react";

const API_URL = "https://primelink-api.vercel.app/api/chatbot";

export default function ChatbotWidget({ initialMessage = "", open: openProp, setOpen: setOpenProp }) {
    // Gunakan controlled open jika diberikan, fallback ke internal state
    const [internalOpen, setInternalOpen] = useState(false);
    const open = typeof openProp === "boolean" ? openProp : internalOpen;
    const setOpen = setOpenProp || setInternalOpen;

    const [messages, setMessages] = useState([
        { from: "bot", text: "Halo! Ada yang bisa dibantu? Silakan ketik pertanyaan Anda." }
    ]);
    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);
    const chatEndRef = useRef(null);

    // Untuk auto-send initialMessage
    const [pendingInitial, setPendingInitial] = useState(initialMessage);

    // Tambahkan deteksi mobile
    const isMobile = window.matchMedia("(max-width: 768px)").matches;

    // Kirim initialMessage jika ada, hanya sekali saat open
    useEffect(() => {
        if (open && pendingInitial) {
            setInput(pendingInitial);
        }
    }, [open, pendingInitial]);

    // Auto-send jika input diisi dari initialMessage dan chatbot dibuka
    useEffect(() => {
        if (open && pendingInitial && input === pendingInitial) {
            sendMessage(pendingInitial);
            setPendingInitial(""); // Hanya sekali
        }
        // eslint-disable-next-line
    }, [input, open, pendingInitial]);

    // Jika initialMessage berubah dari parent, update pendingInitial
    useEffect(() => {
        if (initialMessage) {
            setPendingInitial(initialMessage);
            setInput(initialMessage);
            if (!open) setOpen(true);
        }
        // eslint-disable-next-line
    }, [initialMessage]);

    const sendMessage = async (msg) => {
        const messageToSend = typeof msg === "string" ? msg : input;
        if (!messageToSend.trim()) return;
        const userMsg = { from: "user", text: messageToSend };
        setMessages((msgs) => [...msgs, userMsg]);
        setInput("");
        setLoading(true);

        try {
            const res = await fetch(API_URL, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ message: messageToSend, sessionId: "web-widget" }),
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
            {!open && (
                <button
                    onClick={() => setOpen(true)}
                    style={{
                        position: "fixed",
                        bottom: isMobile ? 16 : 20,
                        right: isMobile ? 16 : 20,
                        zIndex: 1001,
                        background: "#1D6EE5",
                        color: "white",
                        borderRadius: "30px",
                        minWidth: isMobile ? 44 : 56,
                        height: isMobile ? 44 : 56,
                        boxShadow: "0 4px 16px rgba(0,0,0,0.18)",
                        border: "none",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: isMobile ? 22 : 28,
                        cursor: "pointer",
                        padding: isMobile ? "0 10px 0 10px" : "0 20px 0 16px",
                        gap: 10,
                    }}
                    aria-label="Chatbot"
                >
                    {/* Icon robot */}
                    <svg width={isMobile ? 22 : 28} height={isMobile ? 22 : 28} fill="none" viewBox="0 0 24 24">
                        <rect x="4" y="8" width="16" height="10" rx="4" fill="#fff" stroke="#1D6EE5" strokeWidth="2" />
                        <rect x="9" y="2" width="6" height="6" rx="3" fill="#fff" stroke="#1D6EE5" strokeWidth="2" />
                        <circle cx="8.5" cy="13" r="1.5" fill="#1D6EE5" />
                        <circle cx="15.5" cy="13" r="1.5" fill="#1D6EE5" />
                        <rect x="11" y="16" width="2" height="2" rx="1" fill="#1D6EE5" />
                    </svg>
                    {/* Label hanya tampil di desktop */}
                    {!isMobile && (
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
                    )}
                </button>
            )}
            {/* Chatbot Popup */}
            {open && (
                <div
                    style={{
                        position: "fixed",
                        bottom: isMobile ? 68 : 90,
                        right: isMobile ? 8 : 20,
                        width: isMobile ? "95vw" : 370,
                        maxWidth: isMobile ? "98vw" : "95vw",
                        background: "#f7f7f9",
                        borderRadius: 16,
                        boxShadow: "0 8px 32px rgba(0,0,0,0.18)",
                        zIndex: 1002,
                        display: "flex",
                        flexDirection: "column",
                        overflow: "hidden",
                        border: "1px solid #e5e7eb",
                        minHeight: isMobile ? 320 : undefined,
                        maxHeight: isMobile ? 420 : 500,
                    }}
                >
                    {/* Header */}
                    <div style={{
                        background: "#1D6EE5",
                        color: "#fff",
                        padding: isMobile ? "10px 14px" : "14px 20px",
                        fontWeight: 600,
                        fontSize: isMobile ? 15 : 16,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        borderTopLeftRadius: 16,
                        borderTopRightRadius: 16,
                    }}>
                        Servobot Primelink
                        <button
                            onClick={() => setOpen(false)}
                            style={{
                                background: "transparent",
                                border: "none",
                                color: "#fff",
                                fontSize: isMobile ? 18 : 20,
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
                            padding: isMobile ? 10 : 16,
                            background: "#ece5dd",
                            flex: 1,
                            overflowY: "auto",
                            maxHeight: isMobile ? 220 : 400,
                            minHeight: isMobile ? 120 : 220,
                            fontSize: isMobile ? 13 : 15,
                            display: "flex",
                            flexDirection: "column",
                        }}
                    >
                        {messages.map((msg, idx) => (
                            <div
                                key={idx}
                                style={{
                                    marginBottom: 8,
                                    display: "flex",
                                    justifyContent: msg.from === "user" ? "flex-end" : "flex-start",
                                }}
                            >
                                <span
                                    style={{
                                        display: "inline-block",
                                        background: msg.from === "user" ? "#dcf8c6" : "#fff",
                                        color: "#222",
                                        borderRadius: msg.from === "user" ? "14px 14px 4px 14px" : "14px 14px 14px 4px",
                                        padding: isMobile ? "8px 12px" : "10px 16px",
                                        maxWidth: isMobile ? 180 : 240,
                                        wordBreak: "break-word",
                                        boxShadow: "0 1px 2px rgba(0,0,0,0.04)",
                                        fontSize: isMobile ? 13 : 15,
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
                        padding: isMobile ? 8 : 12,
                        borderTop: "1px solid #e5e7eb",
                        background: "#f7f7f9",
                        display: "flex",
                        gap: 6,
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
                                borderRadius: 12,
                                padding: isMobile ? "7px 10px" : "10px 12px",
                                fontSize: isMobile ? 13 : 15,
                                outline: "none",
                                marginBottom: 0,
                                background: "#fff",
                            }}
                            disabled={loading}
                        />
                        <button
                            onClick={() => sendMessage()}
                            disabled={loading || !input.trim()}
                            style={{
                                background: "#1D6EE5",
                                color: "#fff",
                                border: "none",
                                borderRadius: 12,
                                padding: isMobile ? "7px 12px" : "10px 18px",
                                fontWeight: 600,
                                fontSize: isMobile ? 13 : 15,
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
