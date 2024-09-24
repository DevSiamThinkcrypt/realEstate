import mainApi from './mainApi';

const contentApi = mainApi.injectEndpoints({
	endpoints: builder => ({
		getContents: builder.query<any, any>({
			query: ({ limit = 99999 }) => ({
				url: 'contents',
				method: 'GET',
				params: {
					limit,
				},
			}),
			providesTags: ['content'],
		}),
		updateContents: builder.mutation<any, any>({
			query: ({ id, body }) => ({
				url: `contents/${id}`,
				method: 'PUT',
				body,
			}),
      invalidatesTags: ['content']
		}),
	}),
});

export const { useGetContentsQuery, useUpdateContentsMutation } = contentApi;
