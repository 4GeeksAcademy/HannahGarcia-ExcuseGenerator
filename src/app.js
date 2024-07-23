const generatedExcuse = () => {
  const who = ["The dog", "My grandma", "The mailman", "My bird"];
  const action = ["ate", "peed on", "crushed", "broke"];
  const what = ["my homework", "my phone", "the car"];
  const when = ["before the class","when I was sleeping","while I was exercising","during my lunch","while I was praying"];

  const whoIndex = Math.floor(Math.random() * who.length);
  const actionIndex = Math.floor(Math.random() * action.length);
  const whatIndex = Math.floor(Math.random() * what.length);
  const whenIndex = Math.floor(Math.random() * when.length);

  return `${who[whoIndex]} ${action[actionIndex]} ${what[whatIndex]} ${when[whenIndex]}`;
};

window.onload = function() {
  console.log(generatedExcuse());
  document.body.innerHTML = generatedExcuse();
};
