package com.roundbook;

import io.invertase.firebase.RNFirebasePackage;
import io.invertase.firebase.auth.RNFirebaseAuthPackage;
import io.invertase.firebase.database.RNFirebaseDatabasePackage;

import com.facebook.react.ReactPackage;
import com.facebook.react.modules.core.PermissionListener;
import com.imagepicker.permissions.OnImagePickerPermissionsCallback;
import com.reactnativenavigation.NavigationApplication;
import com.imagepicker.ImagePickerPackage;
import com.lwansbrough.RCTCamera.*;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends NavigationApplication implements OnImagePickerPermissionsCallback {

    private PermissionListener listener;

    @Override
    public boolean isDebug() {
        // Make sure you are using BuildConfig from your own application
        return BuildConfig.DEBUG;
    }

    protected List<ReactPackage> getPackages() {
        // Add additional packages you require here
        // No need to add RnnPackage and MainReactPackage
        return Arrays.<ReactPackage>asList(
                new RNFirebasePackage(),
                new RNFirebaseAuthPackage(),
                new ImagePickerPackage(),
                new RCTCameraPackage(),
                new RNFirebaseDatabasePackage()
        );
    }

    @Override
    public List<ReactPackage> createAdditionalReactPackages() {
        return getPackages();
    }

    @Override
    public void setPermissionListener(PermissionListener listener)
    {
        this.listener = listener;
    }
}
