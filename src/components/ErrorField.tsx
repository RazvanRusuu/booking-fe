interface IErrorField {
  error: string | undefined;
}

const ErrorField: React.FC<IErrorField> = ({ error }) => {
  if (!error) return null;
  return <span className="text-sm font-medium text-red-600">{error}</span>;
};

export default ErrorField;
