const config = {
  production: {
    API_END_POINT: process.env.NEXT_PUBLIC_API_END_POINT
  },
  development: {
    API_END_POINT: process.env.NEXT_PUBLIC_API_END_POINT
  },
  stage: {
    API_END_POINT: process.env.NEXT_PUBLIC_API_END_POINT
  },
  qa: {
    API_END_POINT: process.env.NEXT_PUBLIC_API_END_POINT,
  },
};

export default config[process.env.NEXT_PUBLIC_ENVIRONMENT || 'development'];
