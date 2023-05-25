import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("RefreshTokenScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class RefreshTokenScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [RefreshTokenScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: RefreshTokenScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [RefreshTokenScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: RefreshTokenScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [RefreshTokenScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: RefreshTokenScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  createdAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  updatedAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableWithAggregatesFilter, {
    nullable: true
  })
  deletedAt?: DateTimeNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  refreshToken?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  userId?: StringWithAggregatesFilter | undefined;
}