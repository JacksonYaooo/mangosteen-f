import { faker } from '@faker-js/faker'
import { AxiosRequestConfig } from 'axios';

type Mock = (config: AxiosRequestConfig) => [number, any]

faker.setLocale('zh_CN')

export const mockSession: Mock = (config) => {
  return [200, {
    jwt: faker.random.word()
  }]
}

export const mockTagIndex: Mock = (config) => {
  const { kind, page } = config.params
  const per_page = 25
  const count = 26
  let id = 0
  const createId = () => {
    id += 1
    return id
  }
  const createPaper = (page = 1) => ({
    page, per_page, count
  })
  const createTag = (n = 1, attrs?: any) =>
    Array.from({ length: n }).map(() => ({
      id: createId(),
      name: faker.lorem.word(),
      sign: faker.internet.emoji(),
      kind: config.params.kind,
      ...attrs
    }))

  const createBody = (n = 1, attrs?: any) => ({
    resources: createTag(n), pager: createPaper(page)
  })

  if (kind === 'expenses' && (page === 1 || !page)) {
    return [200, createBody(25)]
  } else if (kind === 'expenses' && page === 2) {
    return [200, createBody(1)]
  } else {
    return [200, { resources: createTag(20) }]
  }

}
