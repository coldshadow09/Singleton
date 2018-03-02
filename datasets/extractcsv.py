import pandas

store = pandas.HDFStore('mdp.1.0.h5')

store['/dataframe/samples'].to_csv('mdp.rpkm.1.0.samples.csv', sep=',')  # write to a tab separated text file

# hdf5 file open/create IO errors incur without close pre-opened hdf5 file
store.close