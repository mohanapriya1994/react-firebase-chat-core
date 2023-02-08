const logger = err => {
  if (err && !err.response) {
    console.log('API Connection failed');
  }

  if (err && err.response) {
    const { status } = err.response;
    switch (status) {
      default:
        console.error(err);
    }
  }
};

export default logger;
