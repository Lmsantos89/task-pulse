import { PassedInitialConfig } from 'angular-auth-oidc-client';

export const authConfig: PassedInitialConfig = {
  config: {
    authority:
      'https://cognito-idp.eu-west-3.amazonaws.com/eu-west-3_Fk9BKF9p4',
    redirectUrl: 'http://localhost:4200/callback',
    postLogoutRedirectUri: 'http://localhost:4200',
    clientId: '74dthh9lqbfoq1v2hopvani841',
    scope: 'email openid',
    responseType: 'code',
    silentRenew: true,
    useRefreshToken: true,
    renewTimeBeforeTokenExpiresInSeconds: 30,
  },
};
