import React from "react"

import * as Yup from "yup"
import Screen from "../components/Screen"

import defaultStyles from "../config/styles"
import { AppForm, AppFormField, AppFormPicker, SubmitButton } from "../components/forms"
import CategoryPickerItem from "../components/CategoryPickerItem"



const validationSchema = Yup.object().shape({
    title: Yup.string().required().min(1).label("Title"),
    price: Yup.number().required().min(1).max(10000).label("Price"),
    description: Yup.string().label("Description"),
    category: Yup.object().required().nullable().label("Category"),
})

const categories = [
    { label: "Furniture", value: 1, backgroundColor: "red", icon: "apps" },
    { label: "Clothing", value: 2, backgroundColor: "green", icon: "email" },
    { label: "Cameras", value: 3, backgroundColor: "blue", icon: "instagram" },
    { label: "Games", value: 4, backgroundColor: "yellow", icon: "gamepad" },
    { label: "Books", value: 5, backgroundColor: "orange", icon: "book" },
    { label: "Movies & Music", value: 6, backgroundColor: "purple", icon: "music" },
    { label: "Sports", value: 7, backgroundColor: "pink", icon: "basketball" },
    { label: "Other", value: 8, backgroundColor: "black", icon: "beaker" },
]

export default function ListingEditScreen() {
    return (
        <Screen style={defaultStyles.screens}>
            <AppForm
                initialValues={{
                    title: "",
                    price: "",
                    description: "",
                    category: null,
                }}
                onSubmit={values => console.log(values)}
                validationSchema={validationSchema}
            >
                <AppFormField
                    maxLength={255}
                    name="title"
                    placeholder="Title"
                />
                <AppFormField
                    keyboardType="numeric"
                    maxLength={8}
                    name="price"
                    placeholder="Price"
                />
                <AppFormPicker
                    items={categories}
                    name="category"
                    placeholder="Category"
                    width={"100%"}
                    PickerItemComponent={CategoryPickerItem}
                    numberOfColumns={3}
                />
                <AppFormField
                    maxLength={255}
                    multiline
                    name="description"
                    numberOfLines={2}
                    placeholder="Description"
                />
                <SubmitButton title="Post" />
            </AppForm>
        </Screen>
    )
}





