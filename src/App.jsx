import { useState } from "react";
import "./estilos.css"

export default function App() {
  const [formData, setFormData] = useState({
    nome: "",
    cargo: "",
    biografia: "",
    imagemUrl: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleReset = () => {
    setFormData({
      nome: "",
      cargo: "",
      biografia: "",
      imagemUrl: "",
    });
  };

  const handleExample = () => {
    setFormData({
      nome: "Lucas Soares Pevarello",
      cargo: "Programador Júnior",
      biografia:
        "Cursando Análise e Desenvolvimento de Sistemas na Faculdade de Tecnologia SENAI Félix Guisard. Trabalhando como Programador Júnior, com foco em desenvolvimento frontend, utilizando principalmente React. Possuo noções de backend com Python com Flask e Django, JavaScript com Express.js e NodeJS e bancos de dados MySQL e PostgresSQL.",
      imagemUrl:
        "https://lh3.googleusercontent.com/a/ACg8ocL9P5jgpcf9jUqdrJF88XkQaMKRexSXzJ7ebsyovzHW9aNUyw=s576-c-mo-no",
    });
  };

  return (
    <div className="app-container">
      <div className="main-content">
        {/* Seção do Formulário */}
        <div className="form-section">
          <h2 className="form-title">Criar Cartão de Perfil</h2>

          <div className="form-container">
            <div className="input-group">
              <label className="input-label">Nome do Usuário</label>
              <input
                type="text"
                name="nome"
                value={formData.nome}
                onChange={handleInputChange}
                placeholder="Digite seu nome completo"
                className="input-field"
              />
            </div>

            <div className="input-group">
              <label className="input-label">Cargo ou Título</label>
              <input
                type="text"
                name="cargo"
                value={formData.cargo}
                onChange={handleInputChange}
                placeholder="Ex: Desenvolvedor, Designer, Gerente..."
                className="input-field"
              />
            </div>

            <div className="input-group">
              <label className="input-label">URL da Imagem de Perfil</label>
              <input
                type="url"
                name="imagemUrl"
                value={formData.imagemUrl}
                onChange={handleInputChange}
                placeholder="https://exemplo.com/sua-foto.jpg"
                className="input-field"
              />
            </div>

            <div className="input-group">
              <label className="input-label">Biografia (2-3 linhas)</label>
              <textarea
                name="biografia"
                value={formData.biografia}
                onChange={handleInputChange}
                placeholder="Conte um pouco sobre você, suas habilidades e interesses..."
                rows="4"
                className="textarea-field"
              />
            </div>

            <div className="button-container">
              <button
                type="button"
                onClick={handleReset}
                className="btn btn-secondary"
              >
                Limpar
              </button>
              <button
                type="button"
                onClick={handleExample}
                className="btn btn-primary"
              >
                Exemplo
              </button>
            </div>
          </div>
        </div>

        {/* Seção do Cartão de Perfil */}
        <div className="card-section">
          <div className="profile-card">
            {/* Imagem de Perfil */}
            <div className="image-container">
              {formData.imagemUrl ? (
                <img
                  src={formData.imagemUrl}
                  alt="Foto de perfil"
                  className="profile-image"
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.nextSibling.style.display = "flex";
                  }}
                />
              ) : null}
              <div
                className="profile-placeholder"
                style={{ display: formData.imagemUrl ? "none" : "flex" }}
              >
                Imagem de
                <br />
                Perfil
              </div>
            </div>

            {/* Nome */}
            <h1 className="profile-name">{formData.nome || "Seu Nome"}</h1>

            {/* Cargo */}
            <h2 className="profile-title">{formData.cargo || "Seu Cargo"}</h2>

            {/* Biografia */}
            <p className="profile-bio">
              {formData.biografia ||
                "Sua biografia aparecerá aqui. Conte um pouco sobre você, suas habilidades e experiências."}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
