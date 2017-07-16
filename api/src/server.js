const bodyParser = require('body-parser')
const express = require('express')
const chalk = require('chalk')
const cors = require('cors')
const { graphqlExpress, graphiqlExpress } = require('graphql-server-express')

const { schema } = require('./schema')

const app = express()
const PORT = process.env.PORT || 4000

// Body parser, to access req.body
app.use(bodyParser.json())
app.use(cors())
app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }))
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }))

app.get('/api/healthcheck', (req, res) => {
  res.json({ status: 'ok' })
})

app.post('/api/article', (req, res) => {
  console.log(req.body)
  res.json({ result: 'success' })
})

app.listen(PORT, () => {
  const graphiqlPath = chalk.cyan(`http://localhost:${PORT}/graphiql`)
  console.log(`${chalk.green('✓')} GraphiQL is running at ${graphiqlPath} in ${app.get('env')} mode`)
  console.log(`  PRESS ${chalk.yellow('CTRL-C')} to stop\n`)
})
