interface ChildProps {
  color: string;
  onClick: () => void;
}

export const Child = ({ color, onClick }: ChildProps) => {
  return (
    <div>
      {color}
      <button onClick={onClick}>Click me</button>
    </div>
  );
};

//export const ChildFC: React.FunctionComponent<ChildProps>
//不再建議使用 React.FC，原因是一旦將 React 元件的型別定義成 React.FC<> 型別後，它會自動接受 children 作為可以傳入的 props，即使在這個 React 元件中並不會使用到 children。另外，使用 React.FC<> 若再針對元件定義 defaultProps 時可能會有誤判的情況。

export const ChildFC: React.FC<ChildProps> = ({ color, onClick }) => {
  return (
    <div>
      {color}
      <button onClick={onClick}>Click me</button>
    </div>
  );
};
