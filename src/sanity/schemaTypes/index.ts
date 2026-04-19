import { type SchemaTypeDefinition } from 'sanity'

import {blockContentType} from './blockContentType'
import {categoryType} from './categoryType'
import {authorType} from './authorType'
// import { markdownSchema } from 'sanity-plugin-markdown'

import { profileSchema } from './profile'    // or keep in one file as above
import { postSchema }    from './post'
import { projectSchema } from './project'
import { experienceSchema } from './experience'
import { blogSchema } from './blog'
import { updateSchema } from './update'
import { contactLink } from './contactLink'
import  followers  from './followers'
import  codeblock  from './codeblock'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContentType, categoryType, authorType ,profileSchema ,postSchema, projectSchema, experienceSchema ,blogSchema ,updateSchema ,contactLink ,followers ,codeblock],
}
