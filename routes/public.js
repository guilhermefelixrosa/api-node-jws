import express from 'express';

const router = express.Router();

// Rota de cadastro
router.post('/cadastro', (req, res) => {
    const user = req.body;  // req.body deve ser preenchido pelo middleware express.json()
    console.log('Teste')

    res.status(200).json(user); // Retorna o usuário cadastrado como resposta JSON
});

export default router