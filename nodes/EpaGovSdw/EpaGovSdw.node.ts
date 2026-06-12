import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';


export class EpaGovSdw implements INodeType {
        description: INodeTypeDescription = {
                displayName: 'Epa Gov Sdw',
                name: 'N8nDevEpaGovSdw',
                icon: { light: 'file:./epa-gov-sdw.png', dark: 'file:./epa-gov-sdw.dark.png' },
                group: ['input'],
                version: 1,
                subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
                description: 'ECHO: EPA\'s public tool for integrated compliance and enforcement data.',
                defaults: { name: 'Epa Gov Sdw' },
                usableAsTool: true,
                inputs: [NodeConnectionTypes.Main],
                outputs: [NodeConnectionTypes.Main],
                credentials: [
                        {
                                name: 'N8nDevEpaGovSdwApi',
                                required: true,
                        },
                ],
                requestDefaults: {
                        baseURL: '={{\$credentials.url}}',
                        headers: {
                                Accept: 'application/json',
                                'Content-Type': 'application/json',
                        },
                },
                properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [],
			"default": ""
		},
		
                ],
        };
}
