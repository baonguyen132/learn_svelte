import {defineField, defineType} from 'sanity'

export const devExperience = defineType(
    {
        name: 'devExperience',
        title: 'Development Experience',
        type: 'document',
        fields: [
            defineField({
                name: 'jobTitle',
                title: 'Job Title',
                type: 'string',
                validation: (Rule) => Rule.required()
            }),
            defineField({
                name: 'company',
                title: 'Company',
                type: 'string',
                validation: (Rule) => Rule.required()
            }),
            defineField({
                name: 'startDate',
                title: 'Start Date',
                type: 'date',
                validation: (Rule) => Rule.required(),
                options: {
                    dateFormat: 'YYYY-MM'
                }
            }),
            defineField({
                name: 'endDate',
                title: 'End Date',
                type: 'date',
                options: {
                    dateFormat: 'YYYY-MM'
                }
            }),
        ]
    }
)