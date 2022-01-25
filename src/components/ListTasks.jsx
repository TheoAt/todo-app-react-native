import React, { useState } from 'react'
import { ScrollView } from 'react-native'
import { SwipeListView } from 'react-native-swipe-list-view'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import { ListView, ListViewHidden, HiddenButton, SwipedTodoText, TodoText, TodoDate, colors } from '../styles/appStyles'

const ListTasks = ({ tasks, setTasks }) => {
    return(
            <SwipeListView
                data={tasks}
                renderItem={(data) => {
                    return(
                        <ListView>
                            <ScrollView>
                                <TodoText>{data.item.title}</TodoText>
                                <TodoDate>{data.item.date}</TodoDate>
                            </ScrollView>
                        </ListView>
                    )
                }}
                renderHiddenItem={() => {
                    return(
                        <ListViewHidden>
                            <HiddenButton>
                                <MaterialCommunityIcons
                                    name='delete-empty-outline'
                                    size={24}
                                    color={colors.tertiary}
                                />
                            </HiddenButton>
                        </ListViewHidden>
                    )
                }}
                leftOpenValue={80}
                previewRowKey={'1'}
                previewOpenValue={80}
                previewOpenDelay={3000}
                disableLeftSwipe={true}
                showsVerticalScrollIndicator={false}
                style={{             
                    flex: 1,
                    paddingTop: 16,
                    backgroundColor: `${colors.primary}`,
                    borderTopLeftRadius: 24,
                    borderTopRightRadius: 24,
                    marginTop: -20
                }}
            />
    )
}

export default ListTasks