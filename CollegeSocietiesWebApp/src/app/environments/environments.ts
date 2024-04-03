export const environment = {
    production: false,
    apiUri: 'http://localhost:3000/api/v1',
    auth0: {
      domain: 'dev-e4fcat4qg5tbti01.us.auth0.com', 
      clientId: '74g7SbT2I4S58PWhX5prSbENH2AoTrTe', 
      authorizationParams: {
        redirect_uri: window.location.origin,
        audience: 'SS00226489'
      }

    }
  };
  