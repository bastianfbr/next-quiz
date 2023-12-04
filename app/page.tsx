import Choice from './components/choice';
import Question from './components/question';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-white">
      <Question question="Quelle est la réponse à la vie, l'univers et le reste ?" />
      <Choice color="red" content="Ceci est une réponse 1" />
      <Choice color="green" content="Peut-être la réponse 2" />
      <Choice color="orange" content="Ou alors la réponse 3" />
      <Choice color="blue" content="Finalement réponse 4 ?" />
    </main>
  );
}
