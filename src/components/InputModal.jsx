import React from 'react'
import { Modal } from 'react-native'
import { ModalButton, ModalContainer, ModalView, StyledInput, ModalAction, ModalIcon, HeaderTitle, colors } from '../styles/appStyles'
import { AntDesign } from '@expo/vector-icons'

const InputModal = ({ modalOn, setModalOn, taskInputValue, setTaskInputValue }) => {
    const handleCloseModal = () => {
        setModalOn(false)
    }

    const handleSubmit = () => {
        alert('submit')
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
                                <AntDesign name='close' size={20} color={colors.tertiary} />   
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