/*
  This lets us type:
  import Component from 'components/Component'
  instead of:
  import Component from '../../components/Component'
  Both eslint and gatsby need access to this, hence it being in its own file
*/

module.exports = {
  resolve: {
    modules: ['node_modules', 'src'],
  },
};
