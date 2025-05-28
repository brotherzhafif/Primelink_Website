import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function ArticlePage() {
    const { id } = useParams();
    const [article, setArticle] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Ganti URL API sesuai backend Anda
        fetch(`https://your-api-url.com/api/articles/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setArticle(data);
                setLoading(false);
            })
            .catch(() => setLoading(false));
    }, [id]);

    if (loading) return <div>Loading...</div>;
    if (!article) return <div>Artikel tidak ditemukan.</div>;

    return (
        <div>
            <h1>{article.title}</h1>
            <img src={article.image} alt={article.title} style={{ maxWidth: "100%" }} />
            <p>{article.description}</p>
        </div>
    );
}

export default ArticlePage;
