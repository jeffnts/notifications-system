import { IsNotEmpty } from 'class-validator'
import { REQUIRED_FIELD } from 'constants/validation'

type channel = 'WEB_PUSH' | 'SMS' | 'EMAIL'

export class CreateApplicationDto {
  @IsNotEmpty({
    message: JSON.stringify({
      type: REQUIRED_FIELD,
      field: 'name',
    }),
  })
  name: string

  @IsNotEmpty({
    message: JSON.stringify({
      type: REQUIRED_FIELD,
      field: 'channels',
    }),
  })
  channels: channel[]
}
