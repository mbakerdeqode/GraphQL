import { ObjectType, Field, Directive, ID } from '@nestjs/graphql';

@ObjectType()
@Directive('@key(fields:"id")')
export class User {
  @Field((type) => ID, { description: 'Example field (placeholder)' })
  exampleField: number;
}
