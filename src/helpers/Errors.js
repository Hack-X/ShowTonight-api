// Liste des erreurs que l'API peut renvoyer

const list = {
  noShowError: {
    code: 500,
    error: 'noShowError',
    error_description: 'La base ne contient pas de show'
  },
};

export default (err) => {
  if (err instanceof Error && err.message){
    return list[err.message] ? list[err.message] : { code: 500, error: 'UnknownError', error_description: 'Unknown error' };
  } else {
    return list[err] ? list[err] : { code: 500, error: 'UnknownError', error_description: 'Unknown error' };
  }
};