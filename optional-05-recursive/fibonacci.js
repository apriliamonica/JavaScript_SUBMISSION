function fibonacci(n) {
  if (n <= 0) {
    return [0];
  }
  if (n == 1) {
    return [...fibonacci(n - 1), n];
  }
  return [
    ...fibonacci(n - 1),
    fibonacci(n - 1)[fibonacci(n - 1).length - 1] +
      fibonacci(n - 1)[fibonacci(n - 1).length - 2],
  ];
}

// Jangan hapus kode di bawah ini!
export default fibonacci;
