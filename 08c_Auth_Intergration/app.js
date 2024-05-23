
import express from 'express';
import { auth, requiresAuth } from 'express-openid-connect';


const app = express();


const config = {
  authRequired: false,
  auth0Logout: true,
  secret: 'yc6JSFfCfpA2Jw-62EJ2TXbV9UVKhd6PEYjXEsm-ve5Auo0UWa-YJOCYg1Vq_WyO', 
  baseURL: 'http://localhost:3000', 
  clientID: 'mkgKsExGBev8xXcLsgKqHQao29oR9snm', 
  issuerBaseURL: 'dev-5475nj32i7n1fk6f.us.auth0.com', 
};

// Tilslut Auth0 til Express-appen
app.use(auth(config));


app.get('/', (req, res) => {
  res.send(req.oidc.isAuthenticated() ? 'Du er logget ind' : 'Du er logget ud');
});

app.get('/profile', requiresAuth(), (req, res) => {
  res.send(JSON.stringify(req.oidc.user, null, 2));
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Serveren kører på port ${PORT}`);
});
