import { Link } from 'react-router-dom';
import { recipes } from '../data/recipes';
import RecipeImage from '../components/RecipeImage';

export default function Home() {
  return (
    <main className="container">
      <header className="hero">
        <h1>🌸 Recetario 🌸</h1>
        <p>Recetitas veganas, dulces y ricas ♡</p>
      </header>

      <section className="grid">
        {recipes.map((r) => (
          <Link to={`/receta/${r.id}`} key={r.id} className="card">
            <RecipeImage
              className="card-img"
              src={r.foto}
              alt={r.nombre}
              emoji={r.emoji}
            />
            <div className="card-body">
              <span className="badge">🌱 Vegana</span>
              <h2>{r.nombre}</h2>
              <p>{r.descripcion}</p>
              <div className="meta">
                <span>⏰ {r.tiempo}</span>
                <span>🍽️ {r.porciones}</span>
              </div>
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
}
