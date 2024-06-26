import {
  Injectable,
  NestMiddleware,
  UnauthorizedException,
} from '@nestjs/common'
import { Request, NextFunction } from 'types'
import { verifyToken } from 'libs'
import { UNAUTHORIZED } from 'constants/validation'

Injectable()
export class AuthMiddleware implements NestMiddleware {
  async use(req: Request, _: any, next: NextFunction) {
    try {
      const token = req.headers['authorization']
        ?.replace(/ /g, '')
        .replace('Bearer', '')

      if (!token) throw new UnauthorizedException()

      const { uid } = await verifyToken(token)

      req.userId = uid

      next()
    } catch (error) {
      throw new UnauthorizedException(UNAUTHORIZED)
    }
  }
}
