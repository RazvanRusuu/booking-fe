const ErrorField = ({ errors }: { errors: string | undefined }) => {
  if (!errors) return null;
  return <span className="text-sm font-bold text-red-600">{errors}</span>;
};

export default ErrorField;
