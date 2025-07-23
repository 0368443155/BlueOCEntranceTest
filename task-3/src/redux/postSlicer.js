import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchPost = createAsyncThunk("fetchPost", async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/posts");
    return data.json();
});

const postSlice = createSlice({
    // tên của slice
    name: "todo",
    initialState: {
        isLoading: false,
        data:[],
        error: null,
    },
    // định nghĩa extreaReducers để xử lý các trạng thái của async thunk
    extraReducers: (builder) => {
        builder.addCase(fetchPost.pending, (state) => {
                state.isLoading = true;
            });
        builder.addCase(fetchPost.fulfilled, (state, action) => {
                state.isLoading = false;
                // cập nhật dữ liệu khi fetch thành công
                state.data = action.payload;
            });
        builder.addCase(fetchPost.rejected, (state, action) => {
                state.isLoading = false;
                // cập nhật lỗi khi fetch thất bại
                state.error = action.error.message;
            });
    }
});

export default postSlice.reducer;