/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { RuleWhereInput } from "./RuleWhereInput";
import { Type } from "class-transformer";
import { RuleOrderByInput } from "./RuleOrderByInput";

@ArgsType()
class RuleFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => RuleWhereInput,
  })
  @Field(() => RuleWhereInput, { nullable: true })
  @Type(() => RuleWhereInput)
  where?: RuleWhereInput;

  @ApiProperty({
    required: false,
    type: [RuleOrderByInput],
  })
  @Field(() => [RuleOrderByInput], { nullable: true })
  @Type(() => RuleOrderByInput)
  orderBy?: Array<RuleOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { RuleFindManyArgs };
