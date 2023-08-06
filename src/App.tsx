import useInputValue from './useInput';

export default function App() {
  const [ref, value] = useInputValue<HTMLInputElement>('hello');

  return (
    <div>
      <input ref={ref} />
      <p>{value}</p>
    </div>
  );
}
