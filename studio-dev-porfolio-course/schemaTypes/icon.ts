import {defineField, defineType} from 'sanity'

export const skills = defineType({
    name: 'skills',
    title: 'Skills',
    type: 'document',
    fields: [
        defineField({
            name: 'skillName',
            title: 'Skill Name',
            type: 'string',
            description: 'Name of the skill e.g. JavaScript, TypeScript, React, etc.',
            validation: (Rule) => Rule.required()
        }),
        defineField({
            name: 'iconClass',
            title: 'Icon Class',
            type: 'string',
            description: 'CSS class for the icon representing the skill e.g. devicon-javascript-plain',
            validation: (Rule) => Rule.required()
        })
    ]
})