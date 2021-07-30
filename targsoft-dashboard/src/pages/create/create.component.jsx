import React, { useState } from 'react'
import { ActionButton, initializeIcons } from '@fluentui/react'
import { Panel, PrimaryButton, DefaultButton, TextField, Stack } from 'office-ui-fabric-react'
import './create.styles.css'

function CreatePage({ openPanel }) {
    let [isOpen, setIsOpen] = useState(openPanel)
    initializeIcons();

    let closePanel = () => {
        setIsOpen(true)
    }

    return (
        <div>
            <ActionButton className='btn-panel' iconProps={{ iconName: 'Add' }} allowDisabledFocus
                onClick={closePanel}>
                Create post
            </ActionButton>

            <Panel isOpen={isOpen} headerText='Create new post' onDismiss={() => setIsOpen(false)}>
                <Stack tokens={{ childrenGap: 20 }}>
                    <TextField label='Title' />
                    <TextField multiline rows="3" label='Body:' />
                    <TextField label='User id:' />
                    <Stack horizontal horizontalAlign="space-between">
                        <PrimaryButton text='Add Post' />
                        <DefaultButton text='Cancel' />
                    </Stack>
                </Stack>
            </Panel>
        </div>
    )
}
export default CreatePage