export default function App() {
  const handleData = async () => {
    const response = await fetch('https://api.learnzo.online/api/v1/ping');
    const result = await response.json();
    console.log(result);
  };
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <button onClick={handleData}>Fetch Ping</button>
    </div>
  );
}