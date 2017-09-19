// Liste des erreurs que l'API peut renvoyer

const list = {
  noUserError: {
    code: 500,
    error: 'noUserError',
    error_description: 'La base ne contient pas d\'utilisateur'
  },
};

export default (err) => {
  if (err instanceof Error && err.message){
    return list[err.message] ? list[err.message] : { code: 500, error: 'UnknownError', error_description: 'Unknown error' };
  } else {
    return list[err] ? list[err] : { code: 500, error: 'UnknownError', error_description: 'Unknown error' };
  }
};