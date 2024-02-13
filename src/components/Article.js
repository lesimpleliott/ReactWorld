import axios from "axios";
import React, { useState } from "react";

const Article = ({ article }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editContent, setEditContent] = useState("");

    // fonction affichage Date
    const dateFormater = (date) => {
        let newDate = new Date(date).toLocaleDateString("fr-FR", {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",
        });
        return newDate;
    };

    // fonction qui enregistre l'édition du 'content'
    const handleEdit = () => {
        const data = {
            author: article.author,
            content: editContent ? editContent : article.content,
            date: article.date,
            updatedDate: Date.now(),
        };

        axios
            .put("http://localhost:3004/articles/" + article.id, data)
            .then(() => {
                setIsEditing(false);
            });
    };

    // fonction de suppression d'un article
    const handleDelete = () => {
        if (window.confirm("Confirmez-vous la suppression de l'article ?")) {
            axios.delete("http://localhost:3004/articles/" + article.id);
            window.location.reload();
        }
    };

    return (
        <div
            className="article"
            style={{ background: isEditing ? "lightcyan" : null }}
        >
            <div className="card-header">
                <h3>{article.author}</h3>
                <em>Posté le {dateFormater(article.date)}</em>
            </div>

            {isEditing ? (
                <textarea
                    defaultValue={editContent ? editContent : article.content}
                    autoFocus
                    onChange={(e) => setEditContent(e.target.value)}
                ></textarea>
            ) : (
                <p>{editContent ? editContent : article.content}</p>
            )}

            <div className="btn-container">
                {isEditing ? (
                    <button onClick={() => handleEdit()}>Valider</button>
                ) : (
                    <button onClick={() => setIsEditing(true)}>Éditer</button>
                )}

                <button onClick={() => handleDelete()}>Supprimer</button>
            </div>
        </div>
    );
};

export default Article;
