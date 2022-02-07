import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class AddBookInput {
  @Field((type) => String)
  name: string;

  @Field((type) => String)
  author: string;

  @Field({ nullable: true })
  dateCreated?: string;
}
