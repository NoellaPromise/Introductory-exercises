import Jokes from "./Jokes";
import jokes from "./jokes.json";

export default function JokesRender() {
  const JOKE = jokes.map((joke) => (
    <Jokes key={joke.id} setup={joke.setup} punchline={joke.punchline} />
  ));
  return <div className="flex bg-green-900 gap-10 m-7 p-5">{JOKE}</div>;
}
