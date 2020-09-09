export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f59055e29a8596b93da6c9d',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-in2o8dev',
                  apiId: 'd1cd7cd2-48bf-4c84-82c4-9514f162fbe8'
                },
                {
                  buildHookId: '5f59055e56096859796e97d6',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-xu4oipvm',
                  apiId: '0b15d882-bf97-4e2e-b9ca-e5119701f1ad'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/DiesIrae/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-xu4oipvm.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
