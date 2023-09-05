const ErrorMessage = ({ message = "Something went wrong" }) => (
  <div data-testid="message-container">{message}</div>
);

export default ErrorMessage;
