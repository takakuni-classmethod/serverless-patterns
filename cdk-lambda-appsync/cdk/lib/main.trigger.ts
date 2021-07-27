import { createTodo } from './codegen/graphql/mutations'
import { CreateTodoMutationVariables } from './codegen/graphql/API'
import request from './appsyncRequest'

const appsyncURL = process.env.GRAPHQL_URL!

exports.handler = async (event: any) => {
  const variables: CreateTodoMutationVariables = {
    name: event.name || 'a new todo',
    description: event.description || 'with a description',
  }
  const result = await request({ query: createTodo, variables }, appsyncURL)

  if (result.errors) {
    return console.log('Errors in mutation', result.errors)
  }

  console.log(result.data)
}
