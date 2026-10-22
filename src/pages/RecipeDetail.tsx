import { Link, useParams } from "react-router-dom";
import { recipes } from "../data/recipes";
import RecipeImage from "../components/RecipeImage";

export default function RecipeDetail() {
  const { id } = useParams<{ id: string }>();
  const receta = recipes.find((r) => r.id === id);

  if (!receta) {
    return (
      <main className="container">
        <div className="panel">
          <h2>Ay no, no encontramos esa receta 🥺</h2>
          <Link to="/" className="back">← Volver</Link>
        </div>
      </main>
    );
  }

  return (
    <main className="container">
      <Link to="/" className="back">← Volver a recetas</Link>

      <article className="detail">
        <RecipeImage className="detail-img" src={receta.foto} alt={receta.nombre} emoji={receta.emoji} />

        <div className="detail-head">
          <span className="badge">🌱 Vegana</span>
          <h1>{receta.nombre}</h1>
          <p>{receta.descripcion}</p>
          <div className="meta">
            <span>⏰ {receta.tiempo}</span>
            <span>🍽️ {receta.porciones}</span>
          </div>
        </div>

        <section className="panel">
          <h2>🛒 Ingredientes</h2>
          <ul className="ingredients">
            {receta.ingredientes.map((ing, i) => (
              <li key={i}>
                <label>
                  <input type="checkbox" />
                  <span>{ing}</span>
                </label>
              </li>
            ))}
          </ul>
        </section>

        <section className="panel">
          <h2>👩‍🍳 Pasos</h2>
          <ol className="steps">
            {receta.pasos.map((paso, i) => (
              <li key={i}>
                <span className="step-num">{i + 1}</span>
                <p>{paso}</p>
              </li>
            ))}
          </ol>
        </section>
      </article>
    </main>
  );
}
