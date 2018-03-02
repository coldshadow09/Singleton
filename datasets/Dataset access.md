This directory stores a list of dataset sources which could be used by singleton.
For hdf5 files, use the following code as an example to interface with its elements. Also see https://github.com/jarny/genedataset for an existing package that deals with this type of file (note however that extra attributes may exist here which are not dealt by genedataset package).

```python
In [1]: import pandas

In [2]: store = pandas.HDFStore('datasets/mdp.1.0.h5')

In [3]: store
Out[3]: 
<class 'pandas.io.pytables.HDFStore'>
File path: datasets/mdp.1.0.h5
/dataframe/counts                      |  frame    |   (shape->[22487,245])
/dataframe/cpm                         |  frame    |   (shape->[22487,245])
/dataframe/rpkm                        |  frame    |   (shape->[19883,245])
/dataframe/sampleDistances             |  frame    |   (shape->[245,245])  
/dataframe/samples                     |  frame    |   (shape->[1,1])      
/series/attributes                     |  series   |   (shape->[1])        
/series/sampleGroupColours             |  series   |   (shape->[1])        
/series/sampleGroupOrdering            |  series   |   (shape->[1])        
/series/sampleGroupsDisplayed          |  series   |   (shape->[1])        

In [4]: store['/dataframe/samples'].head()
Out[4]: 
         group
sampleId      
RMD264 | MDP
RMD265 | MDP
RMD266 | MDP
RMD267 | MDP
RMD268 | MDP
```