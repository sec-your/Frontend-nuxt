export const getErrorMessage = ({ response, message }) => {
  return response?.data?.message ?? message
}
