#include <iostream>
using namespace std;

int binarySearch(int key, int arr[], int n){
    int low = 0;
    int hi = n -1;
    int ans = -1;
    while(low<=hi){
        int mid = low + (hi - low)/2;
        if(key == arr[mid]){
            ans = mid;
        }
        else if(key > arr[mid]){
            low = mid + 1;
        }
        else{
            hi = mid - 1;
        }
    }
    return ans;
}
void bubbleSort(int n,int arr[]){
   int temp;
   for(int i =0;i<n-1;i++){
    for(int j = 0;j<n-i-1;j++){
        if(arr[j] > arr[j+1]){
            temp = arr[j];
            arr[j]=arr[j+1];
            arr[j+1]=temp;
        }
    }
   }
   return;
}

int main(){
    int arr[] = {5, 6 , 7 , 2 , 3};
    int n = sizeof(arr)/sizeof(arr[0]);
    bubbleSort(n, arr);
    cout<<"Array after sorting"<<endl;
    for(int i = 0;i<n;i++){
        cout<<arr[i]<<" ";
    } 
    cout<<"i am here"<<endl;
    int ans = binarySearch(2, arr, n);
    cout<<ans<<endl;

    return 0;
}