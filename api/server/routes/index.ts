import { Router } from 'express'
import { UsuariosController } from '../../controllers/usuario'
import { authenticate } from '../../shared/middleware/Authentication'
import { ColecaoController } from '../../controllers/colecao'
import { ImagemController } from '../../controllers/imagem'
import { SuporteController } from '../../controllers/suporte'

const router = Router()

router.get('/', (_, res) => {
    res.send('oi')
})

router.post('/cadastrar', UsuariosController.signUpValidation, UsuariosController.signUp)
router.post('/login', UsuariosController.signInValidation, UsuariosController.signIn)
router.get('/usuario', authenticate, UsuariosController.getById)
router.post('/suporte', authenticate, SuporteController.createValidation, SuporteController.create)
router.post('/colecoes', authenticate, ColecaoController.createValidation, ColecaoController.create)
router.get('/colecoes', authenticate, ColecaoController.getAll)
router.post('/imagens/:colecaoId', authenticate, ImagemController.createValidation, ImagemController.create)
router.get('/imagens/:colecaoId', authenticate, ImagemController.getAll)

export { router }

