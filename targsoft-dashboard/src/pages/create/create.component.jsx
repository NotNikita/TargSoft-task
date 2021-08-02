import React, { useState } from 'react'
import { ActionButton, initializeIcons } from '@fluentui/react'
import { Panel, PrimaryButton, DefaultButton, TextField, Stack } from 'office-ui-fabric-react'
import './create.styles.css'

function CreatePage({ openPanel, handleAddPost }) {
    let [isOpen, setIsOpen] = useState(openPanel)
    let [form, setForm] = useState({
        title: '',
        body: '',
        userId: 0
    })
    initializeIcons();

    let closePanel = () => {
        setIsOpen(!isOpen)
    }

    let submitForm = async () => {
        setIsOpen(false)
        handleAddPost(form)
        console.log('form captured: ' + JSON.stringify(form))
    }

    return (
        <div>
            <ActionButton className='btn-panel' iconProps={{ iconName: 'Add' }} allowDisabledFocus
                onClick={closePanel}>
                Create post
            </ActionButton>

            <Panel isOpen={isOpen} headerText='Create new post' onDismiss={() => setIsOpen(false)}>
                <Stack tokens={{ childrenGap: 20 }}>
                    <TextField onChange={(e) => setForm({ ...form, title: e.target.value })} label='Title' />
                    <TextField onChange={(e) => setForm({ ...form, body: e.target.value })}  multiline rows="3" label='Body:' />
                    <TextField onChange={(e) => setForm({ ...form, userId: e.target.value })} label='User id:' />
                    <Stack horizontal horizontalAlign="space-between">
                        <PrimaryButton text='Add Post' onClick={submitForm} />
                        <DefaultButton text='Cancel' onClick={closePanel} />
                    </Stack>
                </Stack>
            </Panel>
        </div>
    )
}
export default CreatePage