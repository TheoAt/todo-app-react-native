import React from 'react'
import { Modal } from 'react-native'
import { ModalButton, ModalContainer, ModalView, StyledInput, ModalAction, ModalIcon, HeaderTitle, colors } from '../styles/appStyles'
import { AntDesign } from '@expo/vector-icons'

const InputModal = ({ tasks, getDate, modalOn, setModalOn, taskInputValue, setTaskInputValue, handleAddTask }) => {
    const handleCloseModal = () => {
        setModalOn(false)
        setTaskInputValue("")
    }

    const handleSubmit = () => {
        handleAddTask({
            title: taskInputValue,
            date: getDate(),
            key: `${(tasks[tasks.length - 1] && parseInt(tasks[tasks.length - 1].key) + 1) || 1 }`
        })
        setTaskInputValue("")
    }

    return(
        <>
            <ModalButton onPress={() => {setModalOn(true)}}>
                <AntDesign name='plus' size={24} color={colors.secondary} />
            </ModalButton>

            <Modal
                animationType='fade'
                transparent={true}
                visible={modalOn}
                onRequestClose={handleCloseModal}
            >
                <ModalContainer>
                    <ModalView>
                        <ModalIcon>
                            <HeaderTitle style={{ marginTop: 8 }}>Nouvelle tâche</HeaderTitle>
                            {/* <AntDesign name='edit' size={30} color={colors.tertiary} /> */}
                        </ModalIcon>

                        <ModalAction color={colors.primary} onPress={handleCloseModal}>
                                <AntDesign name='close' size={16} color={colors.tertiary} />   
                        </ModalAction>

                        <StyledInput
                            placeholder='Ajouter une tâche'
                            placeholderTextColor={colors.alternative}
                            selectionColor={colors.secondary}
                            autoFocus={true}
                            onChangeText={(text) => setTaskInputValue(text)}
                            value={taskInputValue}
                            onSubmitEditing={handleSubmit}
                        />
                    </ModalView>
                </ModalContainer>
            </Modal>
        </>
    )
}

export default InputModal